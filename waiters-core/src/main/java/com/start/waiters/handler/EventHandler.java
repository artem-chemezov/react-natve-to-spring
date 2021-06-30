//package com.start.waiters.handler;
//
//import com.start.waiters.model.Order;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.rest.core.annotation.HandleAfterCreate;
//import org.springframework.data.rest.core.annotation.HandleAfterDelete;
//import org.springframework.data.rest.core.annotation.HandleAfterSave;
//import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
//import org.springframework.hateoas.server.EntityLinks;
//import org.springframework.messaging.simp.SimpMessagingTemplate;
//import org.springframework.stereotype.Component;
//
//@Component
//@RepositoryEventHandler(Order.class)
//public class EventHandler {
//    private final SimpMessagingTemplate websocket;
//    static final String MESSAGE_PREFIX = "/topic";
//
//    private final EntityLinks entityLinks;
//
//    @Autowired
//    public EventHandler(SimpMessagingTemplate websocket,
//                        EntityLinks entityLinks) {
//        this.websocket = websocket;
//        this.entityLinks = entityLinks;
//    }
//
//    @HandleAfterCreate
//    public void newEmployee(Order employee) {
//        this.websocket.convertAndSend(
//                MESSAGE_PREFIX + "/newEmployee", getPath(employee));
//    }
//
//    @HandleAfterDelete
//    public void deleteEmployee(Order employee) {
//        this.websocket.convertAndSend(
//                MESSAGE_PREFIX + "/deleteEmployee", getPath(employee));
//    }
//
//    @HandleAfterSave
//    public void updateEmployee(Order employee) {
//        this.websocket.convertAndSend(
//                MESSAGE_PREFIX + "/updateEmployee", getPath(employee));
//    }
//
//    private String getPath(Order employee) {
//        return this.entityLinks.linkForSingleResource(employee.getClass(),
//                employee.getId()).toUri().getPath();
//    }
//}
