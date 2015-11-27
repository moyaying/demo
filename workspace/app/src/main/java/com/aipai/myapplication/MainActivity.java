package com.aipai.myapplication;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.aipai.myapplication.nativ.NativeBus;

public class MainActivity extends BaseActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getSupportActionBar().setTitle("测试");

        Button button = (Button) findViewById(R.id.btn_hello);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBtnClick();
            }
        });
    }

    @Override
    protected int getLayoutId() {
        return R.layout.activity_main;
    }

    private void onBtnClick() {
        String nativeRet = NativeBus.getInstance().invoke("MainActivity", "parameters2");
        Toast.makeText(MainActivity.this, nativeRet, Toast.LENGTH_SHORT).show();

        Intent intent = new Intent(this, SubActivity.class);
        startActivity(intent);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.my_menu, menu);

        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.action_add:
                //TODO
                return true;
            case R.id.action_settings:
                //TODO
                return true;

            default:
                return super.onOptionsItemSelected(item);
        }
    }
}
