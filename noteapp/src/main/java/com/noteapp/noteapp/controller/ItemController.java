package com.noteapp.noteapp.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.noteapp.noteapp.model.request.ItemRequest;
import com.noteapp.noteapp.service.ItemService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/item")
public class ItemController {

	private final ItemService itemService;

	public ItemController(ItemService itemService) {
		this.itemService = itemService;
	}

	@GetMapping("/{itemId}")
	public ResponseEntity<?> getItem(@PathVariable(value = "itemId") long itemId) {
		return ResponseEntity.ok(itemService.getItem(itemId));

	}

	@GetMapping
	public ResponseEntity<?> getItems() {
		return ResponseEntity.ok(itemService.getItems());

	}

	@PostMapping
	public ResponseEntity<?> createItem(@Valid @RequestBody ItemRequest request) {
		return ResponseEntity.ok(itemService.createItem(request));

	}

	@PatchMapping("/{itemId}")
	public ResponseEntity<?> updateItem(@PathVariable(value = "itemId") long itemId,
			@Valid @RequestBody ItemRequest request) {
		return ResponseEntity.ok(itemService.updateItem(itemId, request));

	}

	@DeleteMapping("/{itemId}")
	public ResponseEntity<?> deleteItem(@PathVariable(value = "itemId") long itemId) {
		itemService.deleteItem(itemId);
		return ResponseEntity.ok("");
	}

}
