
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";

interface WaitlistEntry {
  id: string;
  email: string;
  created_at: string;
}

const Admin = () => {
  const [waitlistEntries, setWaitlistEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchWaitlist = async () => {
      try {
        const { data, error } = await supabase
          .from('waitlist')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          throw error;
        }
        
        setWaitlistEntries(data || []);
        console.log("Fetched waitlist entries:", data);
      } catch (error) {
        console.error("Error fetching waitlist:", error);
        toast({
          variant: "destructive",
          title: "Error loading waitlist",
          description: "Could not load the waitlist data. Please try again later.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWaitlist();
  }, [toast]);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Waitlist Entries</h1>
      
      {loading ? (
        <div className="flex justify-center items-center p-10">
          <div className="w-10 h-10 border-4 border-[#AB9FF2] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : waitlistEntries.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Signup Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {waitlistEntries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{entry.email}</TableCell>
                <TableCell>
                  {format(new Date(entry.created_at), "MMM d, yyyy 'at' h:mm a")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center p-10 text-gray-500">No waitlist entries found.</p>
      )}
      
      <p className="mt-6 text-sm text-gray-500">
        Total entries: {waitlistEntries.length}
      </p>
    </div>
  );
};

export default Admin;
