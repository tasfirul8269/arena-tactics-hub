
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const AdminPanel = () => {
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddAdmin = async () => {
    try {
      setLoading(true);
      
      // First get the user ID for the email
      const { data: users, error: userError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', newAdminEmail)
        .single();

      if (userError || !users) {
        toast.error('User not found');
        return;
      }

      // Add admin role
      const { error: roleError } = await supabase
        .from('user_roles')
        .upsert({ 
          user_id: users.id,
          role: 'admin'
        });

      if (roleError) {
        toast.error('Error adding admin role');
        return;
      }

      toast.success('Admin role added successfully');
      setNewAdminEmail("");
    } catch (error) {
      toast.error('Error adding admin');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Administrators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="User email"
              value={newAdminEmail}
              onChange={(e) => setNewAdminEmail(e.target.value)}
            />
            <Button onClick={handleAddAdmin} disabled={loading}>
              Add Admin
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manage Games</CardTitle>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link to="/admin/games">Manage Games</Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manage Tournaments</CardTitle>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link to="/admin/tournaments">Manage Tournaments</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
