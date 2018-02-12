package com.reactnativepractice.custom.params;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Gravity;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.reactnativepractice.R;


public class SecondActivity extends AppCompatActivity {


    ClassLoader mClassLoader;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        Toast mToast = new Toast(getApplicationContext());
        LinearLayout mLinearLayout = new LinearLayout(getApplicationContext());
        mLinearLayout.setOrientation(LinearLayout.HORIZONTAL);
        mLinearLayout.setBackgroundColor(Color.argb(100,34,123,89));
        mLinearLayout.setGravity(Gravity.CENTER);

        TextView mTextView = new TextView(getApplicationContext());
        mTextView.setText("Toast");
        mTextView.setTextSize(22);
        mTextView.setPadding(20,8,20,8);
        mTextView.setTextColor(Color.BLACK);

        ImageView mImageView = new ImageView(getApplicationContext());
        mImageView.setImageResource(R.mipmap.ic_launcher);
        mImageView.setPadding(20, 8, 20, 8);
        ImageView mImageView1 = new ImageView(getApplicationContext());
        mImageView1.setImageResource(R.mipmap.ic_launcher);
        mImageView1.setPadding(20, 8, 20, 8);

        mLinearLayout.addView(mImageView);
        mLinearLayout.addView(mTextView);
        mLinearLayout.addView(mImageView1);
        mToast.setView(mLinearLayout);
        mToast.setDuration(Toast.LENGTH_SHORT);
        mToast.setGravity(Gravity.CENTER,0,0);
        mToast.show();

        TextView mTextView1 = (TextView) findViewById(R.id.text);
        mTextView1.setText(getIntent().getStringExtra("name"));
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
