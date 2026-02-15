/*
  # Create contact requests table

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key)
      - `name` (text, not null) - Full name of the person
      - `email` (text, not null) - Email address
      - `subject` (text) - Subject of the inquiry
      - `message` (text, not null) - Message content
      - `created_at` (timestamptz) - When the request was submitted
      
  2. Security
    - Enable RLS on `contact_requests` table
    - Add policy for anyone to insert (public form submission)
    - Add policy for authenticated admin users to read all requests
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact requests"
  ON contact_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all contact requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);