import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ctwtylfgcfkjzwlmosos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0d3R5bGZnY2Zranp3bG1vc29zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mjg2NTgyNSwiZXhwIjoyMDc4NDQxODI1fQ.HVucz0PhFZbQdKNwjArc7Mq3qtFAdt677udWnVxnZsc';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkRoles() {
    console.log("Checking profiles table...");
    const { data, error } = await supabase
        .from('profiles')
        .select('id, email, role');

    if (error) {
        console.error("Error querying profiles:", error);

        // If it's a schema cache error, we can try to force a reload by calling a dummy RPC or just waiting.
        // Actually, sometimes querying with a different client or just waiting helps.
    } else {
        console.log("Profiles found:", data);
    }
}

checkRoles();
