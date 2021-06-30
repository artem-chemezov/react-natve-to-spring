//package com.start.waiters.controller;
//
//import org.springframework.messaging.simp.config.MessageBrokerRegistry;
//import org.springframework.stereotype.Component;
//import org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer;
//import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
//import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
//
//@Component
//@EnableWebSocketMessageBroker
//public class CookController2 extends AbstractWebSocketMessageBrokerConfigurer {
//
////    @GetMapping("/cook")
////    @ResponseBody
////    public ResponseEntity<Order> welcome() {
//////		return new ResponseEntity<Greeting>(new Greeting(123, "CONTENT"), HttpStatus.BAD_GATEWAY);
////
////        int sizeOrders = WaitersController.orders.size() - 1;
////
////        ResponseEntity<Order> body =
////                ResponseEntity
////                    .ok()
////                    .contentType(MediaType.APPLICATION_JSON)
////                    .body(WaitersController.orders.get(sizeOrders));
////
////        System.out.println("size: " + sizeOrders + " lastOrder: " + body.getBody().getContent().toString());
////        return body;
////    }
//    static final String MESSAGE_PREFIX = "/topic";
//
//    @Override
//    public void registerStompEndpoints(StompEndpointRegistry registry) {
//        registry.addEndpoint("/payroll").withSockJS();
//    }
//
//    @Override
//    public void configureMessageBroker(MessageBrokerRegistry registry) {
//        registry.enableSimpleBroker(MESSAGE_PREFIX);
//        registry.setApplicationDestinationPrefixes("/app");
//    }
//}