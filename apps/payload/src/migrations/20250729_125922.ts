import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'nl', 'fr');
  CREATE TYPE "public"."cta_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."cta_type" AS ENUM('link', 'event');
  CREATE TYPE "public"."link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."cta_event" AS ENUM('some_form');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en', 'nl', 'fr');
  CREATE TYPE "public"."enum_users_tenants_roles" AS ENUM('tenant-admin', 'tenant-viewer');
  CREATE TYPE "public"."enum_users_dark_mode" AS ENUM('dark', 'light', 'system');
  CREATE TYPE "public"."enum_user_role" AS ENUM('super-admin', 'user', 'admin', 'editor');
  CREATE TYPE "public"."enum_addresses_type" AS ENUM('billing', 'shipping');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'exampleTask', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_workflow_slug" AS ENUM('exampleWorkflow');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'exampleTask', 'schedulePublish');
  CREATE TABLE "pages_blocks_hero_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"cta_label" varchar,
  	"cta_cta_variant" "cta_variant" DEFAULT 'primary',
  	"cta_cta_type" "cta_type" DEFAULT 'link',
  	"cta_link_type" "link_type" DEFAULT 'reference',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar,
  	"cta_event" "cta_event" DEFAULT 'some_form'
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"background_image_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_column_multiple_text_texts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_column_multiple_text_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"cta_label" varchar,
  	"cta_cta_variant" "cta_variant" DEFAULT 'primary',
  	"cta_cta_type" "cta_type" DEFAULT 'link',
  	"cta_link_type" "link_type" DEFAULT 'reference',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar,
  	"cta_event" "cta_event" DEFAULT 'some_form'
  );
  
  CREATE TABLE "pages_blocks_column_multiple_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_column_text_cta_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"cta_label" varchar,
  	"cta_cta_variant" "cta_variant" DEFAULT 'primary',
  	"cta_cta_type" "cta_type" DEFAULT 'link',
  	"cta_link_type" "link_type" DEFAULT 'reference',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar,
  	"cta_event" "cta_event" DEFAULT 'some_form'
  );
  
  CREATE TABLE "pages_blocks_column_text_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_column_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"hubspot_form_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_banner_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"cta_label" varchar,
  	"cta_cta_variant" "cta_variant" DEFAULT 'primary',
  	"cta_cta_type" "cta_type" DEFAULT 'link',
  	"cta_link_type" "link_type" DEFAULT 'reference',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar,
  	"cta_event" "cta_event" DEFAULT 'some_form'
  );
  
  CREATE TABLE "pages_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"icon_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" uuid,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" uuid,
  	"images_id" uuid
  );
  
  CREATE TABLE "_pages_v_blocks_hero_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"cta_label" varchar,
  	"cta_cta_variant" "cta_variant" DEFAULT 'primary',
  	"cta_cta_type" "cta_type" DEFAULT 'link',
  	"cta_link_type" "link_type" DEFAULT 'reference',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar,
  	"cta_event" "cta_event" DEFAULT 'some_form',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"background_image_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_column_multiple_text_texts" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"subtitle" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_column_multiple_text_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"cta_label" varchar,
  	"cta_cta_variant" "cta_variant" DEFAULT 'primary',
  	"cta_cta_type" "cta_type" DEFAULT 'link',
  	"cta_link_type" "link_type" DEFAULT 'reference',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar,
  	"cta_event" "cta_event" DEFAULT 'some_form',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_column_multiple_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_column_text_cta_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"cta_label" varchar,
  	"cta_cta_variant" "cta_variant" DEFAULT 'primary',
  	"cta_cta_type" "cta_type" DEFAULT 'link',
  	"cta_link_type" "link_type" DEFAULT 'reference',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar,
  	"cta_event" "cta_event" DEFAULT 'some_form',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_column_text_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_column_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"hubspot_form_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"cta_label" varchar,
  	"cta_cta_variant" "cta_variant" DEFAULT 'primary',
  	"cta_cta_type" "cta_type" DEFAULT 'link',
  	"cta_link_type" "link_type" DEFAULT 'reference',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar,
  	"cta_event" "cta_event" DEFAULT 'some_form',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"icon_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" uuid,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" uuid,
  	"images_id" uuid
  );
  
  CREATE TABLE "form_hubspot" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"form_id" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_hubspot_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "users_tenants_roles" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_users_tenants_roles",
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
  );
  
  CREATE TABLE "users_tenants" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tenant_id" uuid NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"email" varchar NOT NULL,
  	"first_name" varchar,
  	"last_name" varchar,
  	"dark_mode" "enum_users_dark_mode" DEFAULT 'light' NOT NULL,
  	"role" "enum_user_role" DEFAULT 'user' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"addresses_id" uuid
  );
  
  CREATE TABLE "addresses_type" (
  	"order" integer NOT NULL,
  	"parent_id" uuid NOT NULL,
  	"value" "enum_addresses_type",
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
  );
  
  CREATE TABLE "addresses" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"label" varchar NOT NULL,
  	"street" varchar NOT NULL,
  	"number" varchar NOT NULL,
  	"box" varchar,
  	"postal_code" varchar NOT NULL,
  	"city" varchar NOT NULL,
  	"region" varchar,
  	"country" varchar NOT NULL,
  	"email" varchar,
  	"phone" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "images" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_tablet_url" varchar,
  	"sizes_tablet_width" numeric,
  	"sizes_tablet_height" numeric,
  	"sizes_tablet_mime_type" varchar,
  	"sizes_tablet_filesize" numeric,
  	"sizes_tablet_filename" varchar,
  	"sizes_desktop_url" varchar,
  	"sizes_desktop_width" numeric,
  	"sizes_desktop_height" numeric,
  	"sizes_desktop_mime_type" varchar,
  	"sizes_desktop_filesize" numeric,
  	"sizes_desktop_filename" varchar,
  	"sizes_background_url" varchar,
  	"sizes_background_width" numeric,
  	"sizes_background_height" numeric,
  	"sizes_background_mime_type" varchar,
  	"sizes_background_filesize" numeric,
  	"sizes_background_filename" varchar
  );
  
  CREATE TABLE "icons" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"alt" varchar,
  	"content" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "tenants" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "tenants_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "blogs" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"tenant_id" uuid,
  	"blog" jsonb NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "blogs_locales" (
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"workflow_slug" "enum_payload_jobs_workflow_slug",
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"form_hubspot_id" uuid,
  	"users_id" uuid,
  	"addresses_id" uuid,
  	"images_id" uuid,
  	"icons_id" uuid,
  	"tenants_id" uuid,
  	"blogs_id" uuid,
  	"payload_jobs_id" uuid
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" uuid
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "settings_socials_socials" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"social_name" varchar NOT NULL,
  	"social_url" varchar,
  	"social_icon_id" uuid NOT NULL
  );
  
  CREATE TABLE "settings" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"hubspot_portal_id" varchar,
  	"hubspot_access_token" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_blocks_hero_ctas" ADD CONSTRAINT "pages_blocks_hero_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_background_image_id_images_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text" ADD CONSTRAINT "pages_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_column_multiple_text_texts" ADD CONSTRAINT "pages_blocks_column_multiple_text_texts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_column_multiple_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_column_multiple_text_ctas" ADD CONSTRAINT "pages_blocks_column_multiple_text_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_column_multiple_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_column_multiple_text" ADD CONSTRAINT "pages_blocks_column_multiple_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_column_text_cta_ctas" ADD CONSTRAINT "pages_blocks_column_text_cta_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_column_text_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_column_text_cta" ADD CONSTRAINT "pages_blocks_column_text_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_column_columns" ADD CONSTRAINT "pages_blocks_column_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_column"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_column" ADD CONSTRAINT "pages_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hubspot_form" ADD CONSTRAINT "pages_blocks_hubspot_form_hubspot_form_id_form_hubspot_id_fk" FOREIGN KEY ("hubspot_form_id") REFERENCES "public"."form_hubspot"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hubspot_form" ADD CONSTRAINT "pages_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_text" ADD CONSTRAINT "pages_blocks_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel" ADD CONSTRAINT "pages_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner_ctas" ADD CONSTRAINT "pages_blocks_banner_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner" ADD CONSTRAINT "pages_blocks_banner_icon_id_icons_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."icons"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner" ADD CONSTRAINT "pages_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_seo_image_id_images_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_ctas" ADD CONSTRAINT "_pages_v_blocks_hero_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_background_image_id_images_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text" ADD CONSTRAINT "_pages_v_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_column_multiple_text_texts" ADD CONSTRAINT "_pages_v_blocks_column_multiple_text_texts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_column_multiple_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_column_multiple_text_ctas" ADD CONSTRAINT "_pages_v_blocks_column_multiple_text_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_column_multiple_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_column_multiple_text" ADD CONSTRAINT "_pages_v_blocks_column_multiple_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_column_text_cta_ctas" ADD CONSTRAINT "_pages_v_blocks_column_text_cta_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_column_text_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_column_text_cta" ADD CONSTRAINT "_pages_v_blocks_column_text_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_column_columns" ADD CONSTRAINT "_pages_v_blocks_column_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_column"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_column" ADD CONSTRAINT "_pages_v_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hubspot_form" ADD CONSTRAINT "_pages_v_blocks_hubspot_form_hubspot_form_id_form_hubspot_id_fk" FOREIGN KEY ("hubspot_form_id") REFERENCES "public"."form_hubspot"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hubspot_form" ADD CONSTRAINT "_pages_v_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_text" ADD CONSTRAINT "_pages_v_blocks_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel" ADD CONSTRAINT "_pages_v_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner_ctas" ADD CONSTRAINT "_pages_v_blocks_banner_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner" ADD CONSTRAINT "_pages_v_blocks_banner_icon_id_icons_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."icons"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner" ADD CONSTRAINT "_pages_v_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_seo_image_id_images_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_hubspot_locales" ADD CONSTRAINT "form_hubspot_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_hubspot"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_tenants_roles" ADD CONSTRAINT "users_tenants_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users_tenants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_tenants" ADD CONSTRAINT "users_tenants_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_tenants" ADD CONSTRAINT "users_tenants_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_rels" ADD CONSTRAINT "users_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_rels" ADD CONSTRAINT "users_rels_addresses_fk" FOREIGN KEY ("addresses_id") REFERENCES "public"."addresses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "addresses_type" ADD CONSTRAINT "addresses_type_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."addresses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tenants_locales" ADD CONSTRAINT "tenants_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs" ADD CONSTRAINT "blogs_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_locales" ADD CONSTRAINT "blogs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_hubspot_fk" FOREIGN KEY ("form_hubspot_id") REFERENCES "public"."form_hubspot"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_addresses_fk" FOREIGN KEY ("addresses_id") REFERENCES "public"."addresses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_icons_fk" FOREIGN KEY ("icons_id") REFERENCES "public"."icons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tenants_fk" FOREIGN KEY ("tenants_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings_socials_socials" ADD CONSTRAINT "settings_socials_socials_social_icon_id_icons_id_fk" FOREIGN KEY ("social_icon_id") REFERENCES "public"."icons"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "settings_socials_socials" ADD CONSTRAINT "settings_socials_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_ctas_order_idx" ON "pages_blocks_hero_ctas" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_ctas_parent_id_idx" ON "pages_blocks_hero_ctas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_ctas_locale_idx" ON "pages_blocks_hero_ctas" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_locale_idx" ON "pages_blocks_hero" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_background_image_idx" ON "pages_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_text_order_idx" ON "pages_blocks_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_parent_id_idx" ON "pages_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_path_idx" ON "pages_blocks_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_locale_idx" ON "pages_blocks_text" USING btree ("_locale");
  CREATE INDEX "pages_blocks_column_multiple_text_texts_order_idx" ON "pages_blocks_column_multiple_text_texts" USING btree ("_order");
  CREATE INDEX "pages_blocks_column_multiple_text_texts_parent_id_idx" ON "pages_blocks_column_multiple_text_texts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_column_multiple_text_texts_locale_idx" ON "pages_blocks_column_multiple_text_texts" USING btree ("_locale");
  CREATE INDEX "pages_blocks_column_multiple_text_ctas_order_idx" ON "pages_blocks_column_multiple_text_ctas" USING btree ("_order");
  CREATE INDEX "pages_blocks_column_multiple_text_ctas_parent_id_idx" ON "pages_blocks_column_multiple_text_ctas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_column_multiple_text_ctas_locale_idx" ON "pages_blocks_column_multiple_text_ctas" USING btree ("_locale");
  CREATE INDEX "pages_blocks_column_multiple_text_order_idx" ON "pages_blocks_column_multiple_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_column_multiple_text_parent_id_idx" ON "pages_blocks_column_multiple_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_column_multiple_text_path_idx" ON "pages_blocks_column_multiple_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_column_multiple_text_locale_idx" ON "pages_blocks_column_multiple_text" USING btree ("_locale");
  CREATE INDEX "pages_blocks_column_text_cta_ctas_order_idx" ON "pages_blocks_column_text_cta_ctas" USING btree ("_order");
  CREATE INDEX "pages_blocks_column_text_cta_ctas_parent_id_idx" ON "pages_blocks_column_text_cta_ctas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_column_text_cta_ctas_locale_idx" ON "pages_blocks_column_text_cta_ctas" USING btree ("_locale");
  CREATE INDEX "pages_blocks_column_text_cta_order_idx" ON "pages_blocks_column_text_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_column_text_cta_parent_id_idx" ON "pages_blocks_column_text_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_column_text_cta_path_idx" ON "pages_blocks_column_text_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_column_text_cta_locale_idx" ON "pages_blocks_column_text_cta" USING btree ("_locale");
  CREATE INDEX "pages_blocks_column_columns_order_idx" ON "pages_blocks_column_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_column_columns_parent_id_idx" ON "pages_blocks_column_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_column_columns_locale_idx" ON "pages_blocks_column_columns" USING btree ("_locale");
  CREATE INDEX "pages_blocks_column_order_idx" ON "pages_blocks_column" USING btree ("_order");
  CREATE INDEX "pages_blocks_column_parent_id_idx" ON "pages_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_column_path_idx" ON "pages_blocks_column" USING btree ("_path");
  CREATE INDEX "pages_blocks_column_locale_idx" ON "pages_blocks_column" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hubspot_form_order_idx" ON "pages_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "pages_blocks_hubspot_form_parent_id_idx" ON "pages_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hubspot_form_path_idx" ON "pages_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "pages_blocks_hubspot_form_locale_idx" ON "pages_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hubspot_form_hubspot_form_idx" ON "pages_blocks_hubspot_form" USING btree ("hubspot_form_id");
  CREATE INDEX "pages_blocks_image_text_order_idx" ON "pages_blocks_image_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_text_parent_id_idx" ON "pages_blocks_image_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_text_path_idx" ON "pages_blocks_image_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_text_locale_idx" ON "pages_blocks_image_text" USING btree ("_locale");
  CREATE INDEX "pages_blocks_carousel_order_idx" ON "pages_blocks_carousel" USING btree ("_order");
  CREATE INDEX "pages_blocks_carousel_parent_id_idx" ON "pages_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_carousel_path_idx" ON "pages_blocks_carousel" USING btree ("_path");
  CREATE INDEX "pages_blocks_carousel_locale_idx" ON "pages_blocks_carousel" USING btree ("_locale");
  CREATE INDEX "pages_blocks_banner_ctas_order_idx" ON "pages_blocks_banner_ctas" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner_ctas_parent_id_idx" ON "pages_blocks_banner_ctas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner_ctas_locale_idx" ON "pages_blocks_banner_ctas" USING btree ("_locale");
  CREATE INDEX "pages_blocks_banner_order_idx" ON "pages_blocks_banner" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner_parent_id_idx" ON "pages_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner_path_idx" ON "pages_blocks_banner" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner_locale_idx" ON "pages_blocks_banner" USING btree ("_locale");
  CREATE INDEX "pages_blocks_banner_icon_idx" ON "pages_blocks_banner" USING btree ("icon_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_slug_idx" ON "pages_locales" USING btree ("slug","_locale");
  CREATE INDEX "pages_seo_seo_image_idx" ON "pages_locales" USING btree ("seo_image_id","_locale");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_locale_idx" ON "pages_rels" USING btree ("locale");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id","locale");
  CREATE INDEX "pages_rels_images_id_idx" ON "pages_rels" USING btree ("images_id","locale");
  CREATE INDEX "_pages_v_blocks_hero_ctas_order_idx" ON "_pages_v_blocks_hero_ctas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_ctas_parent_id_idx" ON "_pages_v_blocks_hero_ctas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_ctas_locale_idx" ON "_pages_v_blocks_hero_ctas" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_locale_idx" ON "_pages_v_blocks_hero" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_hero_background_image_idx" ON "_pages_v_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "_pages_v_blocks_text_order_idx" ON "_pages_v_blocks_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_parent_id_idx" ON "_pages_v_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_text_path_idx" ON "_pages_v_blocks_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_text_locale_idx" ON "_pages_v_blocks_text" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_column_multiple_text_texts_order_idx" ON "_pages_v_blocks_column_multiple_text_texts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_column_multiple_text_texts_parent_id_idx" ON "_pages_v_blocks_column_multiple_text_texts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_column_multiple_text_texts_locale_idx" ON "_pages_v_blocks_column_multiple_text_texts" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_column_multiple_text_ctas_order_idx" ON "_pages_v_blocks_column_multiple_text_ctas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_column_multiple_text_ctas_parent_id_idx" ON "_pages_v_blocks_column_multiple_text_ctas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_column_multiple_text_ctas_locale_idx" ON "_pages_v_blocks_column_multiple_text_ctas" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_column_multiple_text_order_idx" ON "_pages_v_blocks_column_multiple_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_column_multiple_text_parent_id_idx" ON "_pages_v_blocks_column_multiple_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_column_multiple_text_path_idx" ON "_pages_v_blocks_column_multiple_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_column_multiple_text_locale_idx" ON "_pages_v_blocks_column_multiple_text" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_column_text_cta_ctas_order_idx" ON "_pages_v_blocks_column_text_cta_ctas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_column_text_cta_ctas_parent_id_idx" ON "_pages_v_blocks_column_text_cta_ctas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_column_text_cta_ctas_locale_idx" ON "_pages_v_blocks_column_text_cta_ctas" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_column_text_cta_order_idx" ON "_pages_v_blocks_column_text_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_column_text_cta_parent_id_idx" ON "_pages_v_blocks_column_text_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_column_text_cta_path_idx" ON "_pages_v_blocks_column_text_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_column_text_cta_locale_idx" ON "_pages_v_blocks_column_text_cta" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_column_columns_order_idx" ON "_pages_v_blocks_column_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_column_columns_parent_id_idx" ON "_pages_v_blocks_column_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_column_columns_locale_idx" ON "_pages_v_blocks_column_columns" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_column_order_idx" ON "_pages_v_blocks_column" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_column_parent_id_idx" ON "_pages_v_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_column_path_idx" ON "_pages_v_blocks_column" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_column_locale_idx" ON "_pages_v_blocks_column" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_hubspot_form_order_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hubspot_form_parent_id_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hubspot_form_path_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hubspot_form_locale_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_hubspot_form_hubspot_form_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("hubspot_form_id");
  CREATE INDEX "_pages_v_blocks_image_text_order_idx" ON "_pages_v_blocks_image_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_text_parent_id_idx" ON "_pages_v_blocks_image_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_text_path_idx" ON "_pages_v_blocks_image_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_text_locale_idx" ON "_pages_v_blocks_image_text" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_carousel_order_idx" ON "_pages_v_blocks_carousel" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_carousel_parent_id_idx" ON "_pages_v_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_path_idx" ON "_pages_v_blocks_carousel" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_carousel_locale_idx" ON "_pages_v_blocks_carousel" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_banner_ctas_order_idx" ON "_pages_v_blocks_banner_ctas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner_ctas_parent_id_idx" ON "_pages_v_blocks_banner_ctas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner_ctas_locale_idx" ON "_pages_v_blocks_banner_ctas" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_banner_order_idx" ON "_pages_v_blocks_banner" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner_parent_id_idx" ON "_pages_v_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner_path_idx" ON "_pages_v_blocks_banner" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner_locale_idx" ON "_pages_v_blocks_banner" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_banner_icon_idx" ON "_pages_v_blocks_banner" USING btree ("icon_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_pages_v_version_seo_version_seo_image_idx" ON "_pages_v_locales" USING btree ("version_seo_image_id","_locale");
  CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_locale_idx" ON "_pages_v_rels" USING btree ("locale");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX "_pages_v_rels_images_id_idx" ON "_pages_v_rels" USING btree ("images_id","locale");
  CREATE INDEX "form_hubspot_updated_at_idx" ON "form_hubspot" USING btree ("updated_at");
  CREATE INDEX "form_hubspot_created_at_idx" ON "form_hubspot" USING btree ("created_at");
  CREATE UNIQUE INDEX "form_hubspot_locales_locale_parent_id_unique" ON "form_hubspot_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "users_tenants_roles_order_idx" ON "users_tenants_roles" USING btree ("order");
  CREATE INDEX "users_tenants_roles_parent_idx" ON "users_tenants_roles" USING btree ("parent_id");
  CREATE INDEX "users_tenants_order_idx" ON "users_tenants" USING btree ("_order");
  CREATE INDEX "users_tenants_parent_id_idx" ON "users_tenants" USING btree ("_parent_id");
  CREATE INDEX "users_tenants_tenant_idx" ON "users_tenants" USING btree ("tenant_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE INDEX "users_rels_order_idx" ON "users_rels" USING btree ("order");
  CREATE INDEX "users_rels_parent_idx" ON "users_rels" USING btree ("parent_id");
  CREATE INDEX "users_rels_path_idx" ON "users_rels" USING btree ("path");
  CREATE INDEX "users_rels_addresses_id_idx" ON "users_rels" USING btree ("addresses_id");
  CREATE INDEX "addresses_type_order_idx" ON "addresses_type" USING btree ("order");
  CREATE INDEX "addresses_type_parent_idx" ON "addresses_type" USING btree ("parent_id");
  CREATE INDEX "addresses_updated_at_idx" ON "addresses" USING btree ("updated_at");
  CREATE INDEX "addresses_created_at_idx" ON "addresses" USING btree ("created_at");
  CREATE INDEX "images_updated_at_idx" ON "images" USING btree ("updated_at");
  CREATE INDEX "images_created_at_idx" ON "images" USING btree ("created_at");
  CREATE UNIQUE INDEX "images_filename_idx" ON "images" USING btree ("filename");
  CREATE INDEX "images_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "images" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "images_sizes_card_sizes_card_filename_idx" ON "images" USING btree ("sizes_card_filename");
  CREATE INDEX "images_sizes_tablet_sizes_tablet_filename_idx" ON "images" USING btree ("sizes_tablet_filename");
  CREATE INDEX "images_sizes_desktop_sizes_desktop_filename_idx" ON "images" USING btree ("sizes_desktop_filename");
  CREATE INDEX "images_sizes_background_sizes_background_filename_idx" ON "images" USING btree ("sizes_background_filename");
  CREATE INDEX "icons_updated_at_idx" ON "icons" USING btree ("updated_at");
  CREATE INDEX "icons_created_at_idx" ON "icons" USING btree ("created_at");
  CREATE UNIQUE INDEX "icons_filename_idx" ON "icons" USING btree ("filename");
  CREATE INDEX "tenants_updated_at_idx" ON "tenants" USING btree ("updated_at");
  CREATE INDEX "tenants_created_at_idx" ON "tenants" USING btree ("created_at");
  CREATE UNIQUE INDEX "tenants_locales_locale_parent_id_unique" ON "tenants_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "blogs_tenant_idx" ON "blogs" USING btree ("tenant_id");
  CREATE INDEX "blogs_updated_at_idx" ON "blogs" USING btree ("updated_at");
  CREATE INDEX "blogs_created_at_idx" ON "blogs" USING btree ("created_at");
  CREATE UNIQUE INDEX "blogs_locales_locale_parent_id_unique" ON "blogs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_workflow_slug_idx" ON "payload_jobs" USING btree ("workflow_slug");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_form_hubspot_id_idx" ON "payload_locked_documents_rels" USING btree ("form_hubspot_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_addresses_id_idx" ON "payload_locked_documents_rels" USING btree ("addresses_id");
  CREATE INDEX "payload_locked_documents_rels_images_id_idx" ON "payload_locked_documents_rels" USING btree ("images_id");
  CREATE INDEX "payload_locked_documents_rels_icons_id_idx" ON "payload_locked_documents_rels" USING btree ("icons_id");
  CREATE INDEX "payload_locked_documents_rels_tenants_id_idx" ON "payload_locked_documents_rels" USING btree ("tenants_id");
  CREATE INDEX "payload_locked_documents_rels_blogs_id_idx" ON "payload_locked_documents_rels" USING btree ("blogs_id");
  CREATE INDEX "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "settings_socials_socials_order_idx" ON "settings_socials_socials" USING btree ("_order");
  CREATE INDEX "settings_socials_socials_parent_id_idx" ON "settings_socials_socials" USING btree ("_parent_id");
  CREATE INDEX "settings_socials_socials_social_social_icon_idx" ON "settings_socials_socials" USING btree ("social_icon_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_hero_ctas" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_text" CASCADE;
  DROP TABLE "pages_blocks_column_multiple_text_texts" CASCADE;
  DROP TABLE "pages_blocks_column_multiple_text_ctas" CASCADE;
  DROP TABLE "pages_blocks_column_multiple_text" CASCADE;
  DROP TABLE "pages_blocks_column_text_cta_ctas" CASCADE;
  DROP TABLE "pages_blocks_column_text_cta" CASCADE;
  DROP TABLE "pages_blocks_column_columns" CASCADE;
  DROP TABLE "pages_blocks_column" CASCADE;
  DROP TABLE "pages_blocks_hubspot_form" CASCADE;
  DROP TABLE "pages_blocks_image_text" CASCADE;
  DROP TABLE "pages_blocks_carousel" CASCADE;
  DROP TABLE "pages_blocks_banner_ctas" CASCADE;
  DROP TABLE "pages_blocks_banner" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_ctas" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_text" CASCADE;
  DROP TABLE "_pages_v_blocks_column_multiple_text_texts" CASCADE;
  DROP TABLE "_pages_v_blocks_column_multiple_text_ctas" CASCADE;
  DROP TABLE "_pages_v_blocks_column_multiple_text" CASCADE;
  DROP TABLE "_pages_v_blocks_column_text_cta_ctas" CASCADE;
  DROP TABLE "_pages_v_blocks_column_text_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_column_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_column" CASCADE;
  DROP TABLE "_pages_v_blocks_hubspot_form" CASCADE;
  DROP TABLE "_pages_v_blocks_image_text" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel" CASCADE;
  DROP TABLE "_pages_v_blocks_banner_ctas" CASCADE;
  DROP TABLE "_pages_v_blocks_banner" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "form_hubspot" CASCADE;
  DROP TABLE "form_hubspot_locales" CASCADE;
  DROP TABLE "users_tenants_roles" CASCADE;
  DROP TABLE "users_tenants" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "users_rels" CASCADE;
  DROP TABLE "addresses_type" CASCADE;
  DROP TABLE "addresses" CASCADE;
  DROP TABLE "images" CASCADE;
  DROP TABLE "icons" CASCADE;
  DROP TABLE "tenants" CASCADE;
  DROP TABLE "tenants_locales" CASCADE;
  DROP TABLE "blogs" CASCADE;
  DROP TABLE "blogs_locales" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "settings_socials_socials" CASCADE;
  DROP TABLE "settings" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."cta_variant";
  DROP TYPE "public"."cta_type";
  DROP TYPE "public"."link_type";
  DROP TYPE "public"."cta_event";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum_users_tenants_roles";
  DROP TYPE "public"."enum_users_dark_mode";
  DROP TYPE "public"."enum_user_role";
  DROP TYPE "public"."enum_addresses_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_workflow_slug";
  DROP TYPE "public"."enum_payload_jobs_task_slug";`)
}
