import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qfqtglzrdokobprwzndt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmcXRnbHpyZG9rb2Jwcnd6bmR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0NDE4NzcsImV4cCI6MjAyNDAxNzg3N30.RikFJ4H2a-OcHaV1w-rXXhl-EZkI6txc_wQIHSagauM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
