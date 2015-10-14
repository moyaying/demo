package com.aipai.myapplication.nativ;

import android.text.TextUtils;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by moo on 15/7/22.
 */
public class NativeBus {
    static {
        System.loadLibrary("BusLibrary");
    }

    private NativeBus(){
    }

    private static NativeBus instance = new NativeBus();

    public static NativeBus getInstance(){
        return instance;
    }

    public String invoke(String method, String... params){
        String protocol = formatProtocol(method, params);
        if(!TextUtils.isEmpty(protocol)){
            return invokeNative(protocol);
        }

        return null;
    }

    private native String invokeNative (String protocol);

    public void callbackFromNative(String data){
        //TODO;
    }

    private String formatProtocol(String method, String... params){
        try {
            JSONObject protocol = new JSONObject();
            protocol.put("method", method);

            JSONArray ps = new JSONArray();
            for (String param : params){
                ps.put(param);
            }
            protocol.put("parameters", ps);

            return protocol.toString();
        } catch (JSONException e) {
            e.printStackTrace();
        }

        return null;
    }
}
