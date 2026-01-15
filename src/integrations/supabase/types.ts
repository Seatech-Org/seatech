export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          company_name: string | null
          contact_person: string | null
          email: string | null
          phone: string | null
          address: string | null
          gst_number: string | null
          created_at: string
        }
        Insert: {
          id: string
          company_name?: string | null
          contact_person?: string | null
          email?: string | null
          phone?: string | null
          address?: string | null
          gst_number?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          company_name?: string | null
          contact_person?: string | null
          email?: string | null
          phone?: string | null
          address?: string | null
          gst_number?: string | null
          created_at?: string
        }
      }
      dealer_applications: {
        Row: {
          id: string
          dealer_name: string
          address: string
          mobile: string
          email: string
          director_name: string
          director_mobile: string
          director_email: string
          gst_number: string
          turnover_year1: number | null
          turnover_year2: number | null
          turnover_year3: number | null
          product_requirements: string
          remarks: string | null
          status: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          dealer_name: string
          address: string
          mobile: string
          email: string
          director_name: string
          director_mobile: string
          director_email: string
          gst_number: string
          turnover_year1?: number | null
          turnover_year2?: number | null
          turnover_year3?: number | null
          product_requirements: string
          remarks?: string | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          dealer_name?: string
          address?: string
          mobile?: string
          email?: string
          director_name?: string
          director_mobile?: string
          director_email?: string
          gst_number?: string
          turnover_year1?: number | null
          turnover_year2?: number | null
          turnover_year3?: number | null
          product_requirements?: string
          remarks?: string | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      quotes: {
        Row: {
          id: string
          user_id: string | null
          status: string | null
          total_items: number | null
          additional_remarks: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          status?: string | null
          total_items?: number | null
          additional_remarks?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          status?: string | null
          total_items?: number | null
          additional_remarks?: string | null
          created_at?: string
        }
      }
      quote_items: {
        Row: {
          id: string
          quote_id: string | null
          product_id: string | null
          product_name: string | null
          quantity: number | null
          created_at: string
        }
        Insert: {
          id?: string
          quote_id?: string | null
          product_id?: string | null
          product_name?: string | null
          quantity?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          quote_id?: string | null
          product_id?: string | null
          product_name?: string | null
          quantity?: number | null
          created_at?: string
        }
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: "admin" | "user"
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: "admin" | "user"
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: "admin" | "user"
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      app_role: "admin" | "user"
    }
  }
}