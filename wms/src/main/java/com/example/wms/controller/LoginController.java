package com.example.wms.controller;

import com.example.wms.api.CommonResult;
import com.example.wms.api.IErrorCode;
import com.example.wms.entity.User;
import com.example.wms.entity.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author: Eli Shaw
 * @Date: 2019-11-14 11:33:26
 * @Description：
 */
@RestController
public class LoginController {

    User targetUser;

    @RequestMapping(value = "wms/login", method = RequestMethod.POST)
    public CommonResult login(@RequestBody User user) {
        //if (user.getUsername().equals("admin") && user.getPassword().equals("123456"))
            //return CommonResult.success("admin");
        //else
            //return CommonResult.validateFailed();

        if (!this.userExist(user.getUsername())) {
            return CommonResult.validateFailed("User not found");
        } else {
            if (targetUser.getPassword().equals(user.getPassword())) {
                return CommonResult.success(user.getUsername());
            } else {
                return CommonResult.validateFailed("Incorrect Password");
            }
        }
    }

    @Autowired
    UserDao userDao;

    @GetMapping("/getAll")
    public List getAll() {
        List all = userDao.findAll();
        return all;
    }

    public boolean userExist(String username) {
        List userList = this.getAll();
        for (int i = 0; i < userList.size(); i++) {
            Object o = userList.get(i);
            User curr = (User) o;
            if (username.equals(curr.getUsername())) {
                targetUser = curr;
                return true;
            }
        }
        return false;
    }
}

