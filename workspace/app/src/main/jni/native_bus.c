#include <string.h>
#include <jni.h>
#include <stdio.h>

int s_ButtonPressCounter = 0;

jstring
Java_com_aipai_myapplication_nativ_NativeBus_invokeNative(JNIEnv* env, jobject thiz, jstring protocol)
{
    char szBuf[512];
//    char *str = jstringToChar(env, protocol);
    const jbyte *strDest;
    strDest = (*env)->GetStringUTFChars(env, protocol, NULL);

    sprintf(szBuf, "调用了协议:%s, %d", strDest, s_ButtonPressCounter++);

    jstring str = (*env)->NewStringUTF(env, szBuf);
    return str;
}
