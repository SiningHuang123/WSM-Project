package com.example.wms.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author: Eli Shaw
 * @Date: 2019-11-14 11:31:45
 * @Description：
 *
 * 与wms.user绑定
 *
 */

@Entity
public class User {

    @Id
    private int id;
    private String username;
    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

