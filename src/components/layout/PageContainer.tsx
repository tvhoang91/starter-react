function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex h-full flex-col items-center rounded bg-white p-4">{children}</div>;
}

export default PageContainer;
