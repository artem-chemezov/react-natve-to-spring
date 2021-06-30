package com.start.waiters.model;

import java.util.ArrayList;
import java.util.List;

public class Order {

    private final long id;
    private final List<String> content;

    public Order(long id, List<String> content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public List<String> getContent() {
        return content;
    }

}
