import { createClient } from '@supabase/supabase-js';
import { databaseEnv } from './../../database-env';

export const supabase = createClient(databaseEnv.SUPABASE_URL, databaseEnv.SUPABASE_KEY);
