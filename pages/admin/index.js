import AdminHome from "../../components/admin/home/AdminHome";
import {AdminLayout} from "../../components/admin/AdminLayout";

export default function Admin() {
    return (
        <AdminLayout title={'Стартовая'}>
            <AdminHome/>
        </AdminLayout>
    )
}