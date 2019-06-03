package com.model;

public class Student {
    private String name;
    private String college;

    public Student() {
    }

    public String getName() {
        return name;
    }

    public String getCollege() {
        return college;
    }

    public Student(String name, String college) {
        this.name = name;
        this.college = college;
    }
}
