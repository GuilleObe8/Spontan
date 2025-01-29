import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://wmvnfkqxeyhuleaanutz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtdm5ma3F4ZXlodWxlYWFudXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjIyMTIsImV4cCI6MjA1MjA5ODIxMn0.QTRIZ5yue5iYnrJ88e6HfjjjwClDKXBp1h-haDvTJQA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// https://supabase.com/dashboard/project/wmvnfkqxeyhuleaanutz/auth/users
