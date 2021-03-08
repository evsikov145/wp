import {AdminLayout} from "../../components/admin/AdminLayout";
import Users from "../../components/admin/users/Users";

export default function UsersPage() {
    return (
        <AdminLayout title={'Пользователи'}>
            <Users/>
        </AdminLayout>
    )
}