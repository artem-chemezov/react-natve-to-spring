package com.start.waiters.controller;

import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.handler.TextWebSocketHandler;

//@Component
//@EnableWebSocketMessageBroker
public class CookController extends TextWebSocketHandler {


    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {
        System.out.println("wwwwwwwwwwwwwwwwwwwwwwwww");;
    }

//    @GetMapping("/cook")
//    @ResponseBody
//    public ResponseEntity<Order> welcome() {
////		return new ResponseEntity<Greeting>(new Greeting(123, "CONTENT"), HttpStatus.BAD_GATEWAY);
//
//        int sizeOrders = WaitersController.orders.size() - 1;
//
//        ResponseEntity<Order> body =
//                ResponseEntity
//                    .ok()
//                    .contentType(MediaType.APPLICATION_JSON)
//                    .body(WaitersController.orders.get(sizeOrders));
//
//        System.out.println("size: " + sizeOrders + " lastOrder: " + body.getBody().getContent().toString());
//        return body;
//    }

}