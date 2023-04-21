CREATE TABLE hosts (
  host_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  host_url TEXT,
  host_name TEXT,
  host_since DATE,
  host_location TEXT,
  host_about TEXT,
  host_response_time TEXT,
  host_response_rate TEXT,
  host_acceptance_rate TEXT,
  host_is_superhost BOOLEAN,
  host_thumbnail_url TEXT,
  host_picture_url TEXT,
  host_neighbourhood TEXT,
  host_listings_count INTEGER,
  host_total_listings_count INTEGER,
  host_verifications TEXT [],
  host_has_profile_pic BOOLEAN,
  host_identity_verified BOOLEAN
);

--  psql -U davidzhang -d airbnb -a -f hosts.sql