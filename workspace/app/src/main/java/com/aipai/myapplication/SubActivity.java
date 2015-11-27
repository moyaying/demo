package com.aipai.myapplication;

import android.os.Bundle;
import android.support.v7.app.ActionBar;

/**
 * Created by moo on 15/11/20.
 */
public class SubActivity extends BaseActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        ActionBar actionBar = getSupportActionBar();
        if(actionBar != null) {
            actionBar.setDisplayHomeAsUpEnabled(true);
        }
    }

    @Override
    protected int getLayoutId() {
        return R.layout.activity_sub;
    }
}
