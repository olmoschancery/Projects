package com.noteapp.noteapp.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.noteapp.noteapp.domain.Item;
import com.noteapp.noteapp.model.request.ItemRequest;
import com.noteapp.noteapp.model.response.ItemResponse;
import com.noteapp.noteapp.repository.ItemRepository;
import com.noteapp.noteapp.service.ItemService;

@Service
public class ItemServiceImpl implements ItemService {

	final ItemRepository itemRepository;

	public ItemServiceImpl(ItemRepository itemRepository) {
		this.itemRepository = itemRepository;
	}

	@Override
	public ItemResponse getItem(long itemId) {
		return new ItemResponse(itemRepository.getById(itemId));
	}

	@Override
	public List<ItemResponse> getItems() {
		return itemRepository.findAll().stream().map(ItemResponse::new).collect(Collectors.toList());
	}

	@Override
	public ItemResponse createItem(ItemRequest request) {
		Item item = new Item();
		item.setTitle(request.getTitle());
		item.setDescription(request.getDescription());

		return new ItemResponse(itemRepository.save(item));
	}

	@Override
	public ItemResponse updateItem(long itemId, ItemRequest request) {
		Item item = itemRepository.getById(itemId);

		item.setTitle(request.getTitle() != null ? request.getTitle() : item.getTitle());

		item.setDescription(request.getDescription() != null ? request.getDescription() : item.getDescription());

		return new ItemResponse(itemRepository.save(item));

	}

	@Override
	public void deleteItem(long itemId) {
		itemRepository.deleteById(itemId);
	}

}