// @ts-nocheck

function processData(data) {
  let results: any[] = [];
  if (data && Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (item && typeof item === "object" && item.active) {
        if (item.name) {
          let name = item.name.trim();
          if (name) {
            let today = new Date();
            let birthDate = new Date(item.birthDate);
            let age = item.birthDate
              ? today.getFullYear() -
                birthDate.getFullYear() -
                (today.getMonth() < birthDate.getMonth() ||
                (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
                  ? 1
                  : 0)
              : "N/A";
            let email = item.email ? item.email : "N/A";
            let result = {
              id: i,
              name: name,
              age: age,
              email: email,
            };
            results.push(result);
          }
        }
      }
    }
  }
  return results;
}
