package com.aipai.myapplication;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.aipai.myapplication.nativ.NativeBus;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button button = (Button) findViewById(R.id.btn_hello);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBtnClick();
            }
        });
    }

    private void onBtnClick(){
        String nativeRet = NativeBus.getInstance().invoke("MainActivity", "parameters2");
        Toast.makeText(MainActivity.this, nativeRet, Toast.LENGTH_SHORT).show();
    }
}
