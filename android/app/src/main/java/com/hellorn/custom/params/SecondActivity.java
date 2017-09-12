package com.hellorn.custom.params;

import android.app.Activity;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import com.hellorn.R;

public class SecondActivity extends AppCompatActivity {


    ClassLoader mClassLoader;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        TextView mTextView = (TextView) findViewById(R.id.text);
        mTextView.setText(getIntent().getStringExtra("name"));
        findViewById(R.id.back).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mIntent = new Intent();
                mIntent.putExtra("result", "If life lie you");
                setResult(Activity.RESULT_OK, mIntent);
                finish();
            }
        });
    }
}
