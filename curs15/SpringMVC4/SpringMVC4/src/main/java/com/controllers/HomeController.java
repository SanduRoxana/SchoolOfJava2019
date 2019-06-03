package com.controllers;

import com.model.Student;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {

    @RequestMapping(value="/home", method = RequestMethod.GET)
    public String printMyFirstProgram(ModelMap model) {
        model.addAttribute("message", "My First Program");
        return "home";
    }

    @RequestMapping(value="/student/details", method = RequestMethod.GET)
    public String student(ModelMap model) {
        Student st = new Student("Mihai", "Poli");
        model.addAttribute("student", st);
        return "student";
    }


    @RequestMapping(value = "/student/add", method = RequestMethod.POST)
    public String student(Model model, @RequestParam("name") String name, @RequestParam("college") String college) {
        model.addAttribute("result", name + ": " + college);
        return "student";
    }

    @RequestMapping(value = "/students", method = RequestMethod.GET)
    public ModelAndView list(ModelAndView model) {
        return new ModelAndView("list");
    }

    @RequestMapping(value = "/getByName/{name}", method = RequestMethod.GET)
    public String getByName(Model model, @PathVariable String name) {
        String college = "Studentul nu exista";

        for(Student student : studentList()) {
            if(name.equals(student.getName())) {
                college = student.getCollege();
            }
        }

        model.addAttribute("college", college);

        return "name";
    }


    public List<Student> studentList() {
        List<Student> students = new ArrayList<>();
        students.add(new Student("Mihai", "Poli"));
        students.add(new Student("Mircea", "ASE"));

        return students;
    }



}
