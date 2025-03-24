CREATE OR REPLACE VIEW community_post_detail_view AS
SELECT
    posts.post_id,
    posts.title,
    posts.content,
    posts.upvotes,
    posts.created_at,
    topics.topic_id,
    topics.name AS topic_name,
    topics.slug AS topic_slug,
    COUNT(post_replies.post_id) AS replies,
    profiles.name AS author_name,
    profiles.avatar AS author_avatar,
    profiles.role AS author_role,
    profiles.created_at AS author_created_at,
    (SELECT COUNT(*) FROM products WHERE profile_id = profiles.profile_id) AS products,
    (SELECT EXISTS (SELECT 1 FROM public.post_upvotes WHERE post_upvotes.post_id = posts.post_id AND post_upvotes.profile_id = auth.uid())) AS is_upvoted
FROM posts
INNER JOIN topics USING (topic_id)
LEFT JOIN post_replies USING (post_id)
INNER JOIN profiles ON posts.profile_id = profiles.profile_id
GROUP BY posts.post_id, topics.topic_id, topics.name, topics.slug, profiles.name, profiles.avatar, profiles.role, profiles.created_at, profiles.profile_id;