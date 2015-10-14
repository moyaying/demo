LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := BusLibrary

LOCAL_SRC_FILES := native_bus.c

include $(BUILD_SHARED_LIBRARY)
