CREATE FUNCTION public.handle_new_user() 
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
   -- Create a anonymous profile for the user
   IF new.raw_app_meta_data IS NOT NULL THEN
    IF new.raw_app_meta_data ? 'provider' AND new.raw_app_meta_data->>'provider' = 'email' THEN
        INSERT INTO public.profiles (profile_id, name, username, role)
        VALUES (new.id, 'Anonymous', '@mr.' || substr(md5(random()::text), 1, 8), 'developer');
    END IF;
   END IF;
   RETURN NEW;
END;
$$;

CREATE TRIGGER user_to_profile_trigger
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();