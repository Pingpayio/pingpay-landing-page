
import React from "react";
import { LinkIcon, Code2, Repeat, CreditCard, Wallet, MessagesSquare, ArrowUpDown, ShoppingCart } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCardHeightAdjustment } from "@/hooks/useCardHeightAdjustment";

const FeatureGrid: React.FC = () => {
  useIntersectionObserver();
  useCardHeightAdjustment();

  const features = [
    {
      icon: <LinkIcon className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Ping Links",
      description: "Launch a hosted checkout page for payments from a Ping Link, in a few clicks. Receive crypto payments online or in person from all chains; curated for your use cases.",
      comingSoon: false
    },
    {
      icon: <ArrowUpDown className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Ping Onramp",
      description: "Onramp fiat into any NEAR Intents supported currency such as USDC, Bitcoin, Near, Solana, Ethereum, XRP, Doge, Bera, Zcash, Gnosis and Blackdragon.",
      comingSoon: false
    },
    {
      icon: <Repeat className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Automated Subscriptions",
      description: "Offer automated subscriptions/recurring payments without requiring users to pre-fund accounts or approve unlimited spending. Our agent will handle payments automatically.",
      comingSoon: false
    },
    {
      icon: <Wallet className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Ping Account",
      description: "Removing the complexities of crypto payments through chain signatures and NEARs account model. Sign up with email and accept payments to your account.",
      comingSoon: false
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Pay Widgets",
      description: "Embed crypto payments for any use case, into any app or website with Ping's user-friendly, checkout and product widgets with minimal code required.",
      comingSoon: true
    },
    {
      icon: <Code2 className="h-10 w-10 text-[#AB9FF2]" />,
      title: "APIs & SDKs",
      description: "We package our payment solutions into easy to use APIs and SDKs. Plugging into Ping makes powering Agent-to-Agent payments simple.",
      comingSoon: true
    },
    {
      icon: <CreditCard className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Pay With Card",
      description: "Accept traditional payments from non-crypto users with Ping. Receive the crypto you want to receive, while they pay with fiat. Powered by NEAR Intents.",
      roadmap: true
    },
    {
      icon: <MessagesSquare className="h-10 w-10 text-[#AB9FF2]" />,
      title: "AI Assistant",
      description: "The personal payment assistant to make and manage all of your crypto payments across web2 and web3; from Amazon to Uber to Crypto trading.",
      roadmap: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          comingSoon={feature.comingSoon}
          roadmap={feature.roadmap}
          index={index}
        />
      ))}
    </div>
  );
};

export default FeatureGrid;
