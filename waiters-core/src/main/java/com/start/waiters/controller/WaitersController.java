package com.start.waiters.controller;

import com.start.waiters.model.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;


@Controller
public class WaitersController {

	private static final Random rand = new Random();
	public static HashMap<Integer, Order> orders = new HashMap<>();
	private static int orderId = 0;

	@PostMapping(path = "/waiter",
			consumes = "application/json")
	@ResponseBody
	public String welcome(@RequestBody Object order) {
//		return new ResponseEntity<Greeting>(new Greeting(123, "CONTENT"), HttpStatus.BAD_GATEWAY);

		List<String> strings = ((List<Object>)order).stream()
				.map(object -> Objects.toString(object, null))
				.collect(Collectors.toList());

		Order ord = new Order(orderId, strings);
		orders.put(orderId++, ord);


		int sizeOrders = WaitersController.orders.size() - 1;
		System.out.println("size: " + sizeOrders + " lastOrder: " + WaitersController.orders.get(sizeOrders).getContent().get(0));


		return "It is cooking...";
	}
}

