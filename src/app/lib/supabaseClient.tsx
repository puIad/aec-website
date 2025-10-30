import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://zbdwuwupvwnjjccrhprh.supabase.co"; 
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiZHd1d3VwdnduampjY3JocHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NjcwNTQsImV4cCI6MjA1OTQ0MzA1NH0.G0fkLoEQ1sEUwaGHZFFYw8gpA4LUVS4HFBffuv1bTWQ"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
