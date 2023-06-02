package com.noteapp.noteapp.service;

import java.util.List;

import com.noteapp.noteapp.model.request.ItemRequest;
import com.noteapp.noteapp.model.response.ItemResponse;

public interface ItemService {

	ItemResponse getItem(long itemId);

	List<ItemResponse> getItems();

	ItemResponse createItem(ItemRequest request);

	ItemResponse updateItem(long itemId, ItemRequest request);

	void deleteItem(long itemId);
}
