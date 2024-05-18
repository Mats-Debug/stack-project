function Table(props: any) {
  return <table {...props}></table>;
}

function TableHeader(props: any) {
  return (
    <thead>
      <TableRaw {...props}></TableRaw>
    </thead>
  );
}

function TableBody(props: any) {
  return <tbody {...props}></tbody>;
}
function TableRaw(props: any) {
  return <tr {...props}></tr>;
}

function TableHeadElement({ title, ...props }: any) {
  return (
    <th {...props}>
      <p>{title}</p>
    </th>
  );
}

function TableBodyElement(props: any) {
  return <td {...props} />;
}
