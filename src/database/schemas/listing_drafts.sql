-- User is able to create multiple drafts of listings
CREATE TABLE listing_drafts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  host_id INTEGER REFERENCES hosts(host_id),
  structure_type TEXT NOT NULL,
  room_type TEXT,
  -- entire/private/shared in structure -> connected with structure_type
  property_type TEXT,
  -- Address and map
  street_address VARCHAR(255) NOT NULL,
  apt VARCHAR(50),
  city VARCHAR(100) NOT NULL,
  state_province_territory VARCHAR(100) NOT NULL,
  postal_code VARCHAR(20) NOT NULL,
  full_address TEXT,
  neighborhood_overview TEXT,
  neighbourhood TEXT,
  neighbourhood_cleansed TEXT,
  latitude NUMERIC(9, 6),
  longitude NUMERIC(9, 6),
  --------------- floorplan
  bedrooms INTEGER,
  beds INTEGER,
  accommodates INTEGER,
  bathrooms NUMERIC(2, 1),
  lock_available BOOLEAN,
  -- 1.5 baths/shared baths/private bath
  -- Me / My Family / Other Guests/ Roommates -Private room only
  other_guests VARCHAR(50),
  bathrooms_text TEXT,
  -- bathroom types for private rooms
  private_bathrooms NUMERIC(2, 1),
  dedicated_bathrooms NUMERIC(2, 1),
  shared_bathrooms NUMERIC(2, 1),
  ------------------------ amenities
  amenities TEXT [],
  standout_amenities TEXT [],
  safety_items TEXT [],
  picture_url TEXT,
  property_photos TEXT [],
  name TEXT NOT NULL,
  highlights TEXT [],
  description TEXT NOT NULL,
  allows_any_guests BOOLEAN,
  price NUMERIC(7, 2),
  offering_discounts BOOLEAN,
  security_cameras BOOLEAN,
  weapons BOOLEAN,
  dangerous_animals BOOLEAN
);

--  psql -U davidzhang -d airbnb -a -f listing_drafts.sql