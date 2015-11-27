package com.aipai.myapplication;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;

/**
 * Created by moo on 15/11/20.
 */
public abstract class BaseActivity extends AppCompatActivity{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        int layoutId = getLayoutId();
        if(layoutId != 0){
            setContentView(layoutId);
        }

        Toolbar toolbar = (Toolbar) findViewById(R.id.my_toolbar);
        if(toolbar != null) {
            setSupportActionBar(toolbar);
        }
    }

    abstract protected int getLayoutId();
}
