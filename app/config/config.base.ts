// app/config/config.base.ts:

// update the interface to include the new properties
export interface ConfigBaseProps {
  // Existing config properties
  supabaseUrl: string
  supabaseAnonKey: string
  powersyncUrl: string
}

// Add the new properties to the config object
const BaseConfig: ConfigBaseProps = {
  // Existing config values
  supabaseUrl: "<<YOUR_SUPABASE_URL>>",
  supabaseAnonKey: "<<YOUR_SUPABASE_ANON_KEY>>",
  powersyncUrl: "<<YOUR_POWER_SYNC_URL>>",
}
