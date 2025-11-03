import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eblkrantmgizjzcciqvj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVibGtyYW50bWdpemp6Y2NpcXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNzI3OTAsImV4cCI6MjA3Nzc0ODc5MH0.IJ7NQruhQCzFIdCzsnIoilJqedA7VZ8g5l2zrQPOVdA'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

