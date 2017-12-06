package com.hellorn.custom;

import android.os.Parcel;
import android.os.Parcelable;

/**
 * Created by Rookie on 2017/12/1.
 */

public class Person implements Parcelable {
    protected Person(Parcel in) {
    }

    public static final Creator<Person> CREATOR = new Creator<Person>() {
        @Override
        public Person createFromParcel(Parcel in) {
            return new Person(in);
        }

        @Override
        public Person[] newArray(int size) {
            return new Person[size];
        }
    };

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
    }
}
