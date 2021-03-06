package model;

import java.awt.*;

public class Product {
    private int id;
    private double price;
    private String name;
    private String color;

    public Product() {
    }

    public Product(int id) {
        this.id = id;
    }

    public static class Builder {
        private Product product = new Product();

        public Builder setId(int id) {
            product.id = id;
            return this;
        }

        public Builder setPrice(double price) {
            product.price = price;
            return this;
        }

        public Builder setName(String name) {
            product.name = name;
            return this;
        }

        public Builder setColor(String color) {
            product.color = color;
            return this;
        }

        public Product build() {
            return product;
        }
    }

}
