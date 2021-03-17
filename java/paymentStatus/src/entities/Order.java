package entities;

import entities.enums.OrderStatus;

import java.util.Date;

public class Order {
    private Integer id;
    private Date timestamp;
    private OrderStatus status;

    // public Order() {}

    public Order(Integer id, OrderStatus status) {
        this.id = id;
        this.timestamp = new Date();
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", timestamp=" + timestamp +
                ", status=" + status +
                '}';
    }
}
