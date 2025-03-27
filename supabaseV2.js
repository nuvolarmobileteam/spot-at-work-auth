import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
    "https://vacmxvlfaqasujlrugur.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhY214dmxmYXFhc3VqbHJ1Z3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3OTc4OTMsImV4cCI6MjA1NzM3Mzg5M30.U76nd1EFp5AFxmLQX29t2RDS6737B-W6mQchtXS6rZU"
);

export { supabase }; 