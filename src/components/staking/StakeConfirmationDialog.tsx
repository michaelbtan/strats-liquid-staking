import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  
  export function StakeConfirmationDialog() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button className="w-full bg-blue-500 py-6 text-lg font-semibold hover:bg-blue-600">
        Convert to $LSTRATS
      </Button>        
      </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to convert to $LSTRATS?</AlertDialogTitle>
            <AlertDialogDescription>
                Your $STRATS will be exchanged for $LSTRATS and you will start earning rewards. You can unstake at any time.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  