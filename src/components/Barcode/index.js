import Barcode from "react-jsbarcode";
import { useParams } from "react-router-dom";
import { validateEAN13 } from "../../utils";
const Index = () => {
  const params = useParams();
  if (validateEAN13(params?.code)) {
    return (
      <Barcode
        value={params?.code || 123}
        options={{
          format: "EAN13",
          height: 60,
          // background: "gray",
          displayValue: true,
          width: 2.5,
        }}
      />
    );
  }
  return <div>Алдаатай баркод</div>;
};

export default Index;
