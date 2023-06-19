function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex h-full flex-col items-center">{children}</div>;
}

export default PageContainer;
