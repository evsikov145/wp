import AdminNav from "../../components/admin/AdminNav";
import AdminHome from "../../components/admin/AdminHome";

export default function Admin() {
    return (
        <section className="admin">
            <AdminNav/>
            <AdminHome/>
        </section>
    )
}