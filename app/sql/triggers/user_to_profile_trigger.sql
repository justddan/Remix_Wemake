CREATE FUNCTION public.handle_new_user() 
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
   IF new.raw_app_meta_data IS NOT NULL THEN
    IF new.raw_app_meta_data ? 'provider' AND new.raw_app_meta_data ->> 'provider' = 'email' THEN
        IF new.raw_user_meta_data ? 'name' AND new.raw_user_meta_data ? 'username' THEN
            INSERT INTO public.profiles (profile_id, name, username, role)
            VALUES (new.id, new.raw_user_meta_data ->> 'name', new.raw_user_meta_data ->> 'username', 'developer');
        ELSE
            INSERT INTO public.profiles (profile_id, name, username, role)
            VALUES (new.id, 'Anonymous', '@mr.' || substr(md5(random()::text), 1, 8), 'developer');
        END IF;
    END IF;
   END IF;
   RETURN NEW;
END;
$$;

CREATE TRIGGER user_to_profile_trigger
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();