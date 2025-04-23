
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AdminPanel from "@/components/admin/AdminPanel";
import { useAuth } from "@/contexts/AuthContext";
import { checkIsAdmin } from "@/lib/api";

const AdminPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccess = async () => {
      if (!user) {
        navigate('/login');
        return;
      }

      const isAdmin = await checkIsAdmin();
      if (!isAdmin) {
        navigate('/');
      }
    };

    checkAccess();
  }, [user, navigate]);

  if (!user) return null;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <AdminPanel />
      </div>
    </Layout>
  );
};

export default AdminPage;
