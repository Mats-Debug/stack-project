interface PageLayoutProps {
  layoutType: 'Admin' | 'Home' | 'ShopManager';
}

function PageLayout(props: PageLayoutProps) {
  const { layoutType } = props;
  return (
    <main>
      {layoutType === 'Admin' && <AdminLayout />}
      {layoutType === 'ShopManager' && <ShopManagerLayout />}
      {layoutType === 'Home' && <HomeLayout />}
    </main>
  );
}

function AdminLayout() {
  return (
    <main className="flex flex-row w-full ">
      <section className="flex h-screen w-fit bg-red-200 ">Admin</section>
      <section className="flex bg-green-200">
        <p>Admin Body</p>
      </section>
    </main>
  );
}
function ShopManagerLayout() {
  return (
    <main>
      <section>Shop</section>
      <section>Shop Body</section>;
    </main>
  );
}
function HomeLayout() {
  return (
    <main>
      <section className="flex w-full h-fit bg-red-200 ">User</section>
      <section>
        <p>User Body</p>
      </section>
    </main>
  );
}
