import { useAccounts } from "~/store/auth/hooks";

export default function More() {
    
  const accounts = useAccounts();

  return (
    <div>
      {accounts.map(account => (
        <button className="py-3 px-4 flex">
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
          <div className="mx-3 text-[15px]">
            <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
            <div className="text-[#71767b]">@{account.username}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
